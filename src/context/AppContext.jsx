import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleDemoStudent, sampleDemoParent, calculateMatch } from '../utils/matching';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Auth state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('careerbridge_user');
    return saved ? JSON.parse(saved) : { name: "Hashmi Rahman", email: "hashmi@example.com", isLoggedIn: true };
  });

  // Student preferences
  const [studentPref, setStudentPref] = useState(() => {
    const saved = localStorage.getItem('careerbridge_student_pref');
    return saved ? JSON.parse(saved) : sampleDemoStudent;
  });

  // Parent preferences
  const [parentPref, setParentPref] = useState(() => {
    const saved = localStorage.getItem('careerbridge_parent_pref');
    return saved ? JSON.parse(saved) : sampleDemoParent;
  });

  // Saved institution IDs
  const [savedInstitutions, setSavedInstitutions] = useState(() => {
    const saved = localStorage.getItem('careerbridge_saved_inst');
    return saved ? JSON.parse(saved) : ["govt-polytechnic-chennai"];
  });

  // Selected course for deep dive
  const [selectedCourseId, setSelectedCourseId] = useState("diploma-computer-engg");

  // Selected institution for deep dive / map focus
  const [selectedInstitutionId, setSelectedInstitutionId] = useState("govt-polytechnic-chennai");

  // Decision plan lock state
  const [decisionPlan, setDecisionPlan] = useState(() => {
    const saved = localStorage.getItem('careerbridge_decision_plan');
    return saved ? JSON.parse(saved) : {
      isLocked: false,
      courseId: "diploma-computer-engg",
      institutionId: "govt-polytechnic-chennai",
      careerMilestone: "Junior Software Developer → Lateral Entry B.E.",
      lockedAt: null,
      checklist: {
        c1: true,
        c2: true,
        c3: false,
        c4: false,
        c5: false,
      }
    };
  });

  // Toasts notifications queue
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('careerbridge_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('careerbridge_student_pref', JSON.stringify(studentPref));
  }, [studentPref]);

  useEffect(() => {
    localStorage.setItem('careerbridge_parent_pref', JSON.stringify(parentPref));
  }, [parentPref]);

  useEffect(() => {
    localStorage.setItem('careerbridge_saved_inst', JSON.stringify(savedInstitutions));
  }, [savedInstitutions]);

  useEffect(() => {
    localStorage.setItem('careerbridge_decision_plan', JSON.stringify(decisionPlan));
  }, [decisionPlan]);

  // Auth methods
  const login = (name = "Hashmi Rahman", email = "hashmi@example.com") => {
    const updated = { name, email, isLoggedIn: true };
    setUser(updated);
    addToast(`Signed in as ${name}`, 'success');
  };

  const logout = () => {
    setUser({ name: "", email: "", isLoggedIn: false });
    addToast("Logged out successfully.", 'info');
  };

  // Saved institutions toggle
  const toggleSaveInstitution = (id) => {
    if (savedInstitutions.includes(id)) {
      setSavedInstitutions((prev) => prev.filter((item) => item !== id));
      addToast("Institution removed from saved list.", 'info');
    } else {
      setSavedInstitutions((prev) => [...prev, id]);
      addToast("Institution added to your shortlist!", 'success');
    }
  };

  // Demo mode trigger
  const loadDemoData = () => {
    setStudentPref(sampleDemoStudent);
    setParentPref(sampleDemoParent);
    setUser({ name: "Hashmi Rahman", email: "hashmi@example.com", isLoggedIn: true });
    setSavedInstitutions(["govt-polytechnic-chennai", "govt-iti-guindy"]);
    addToast("Loaded SIH Live Demo Profile (88% Match)", 'success');
  };

  // Reset all data
  const resetAllData = () => {
    localStorage.removeItem('careerbridge_student_pref');
    localStorage.removeItem('careerbridge_parent_pref');
    localStorage.removeItem('careerbridge_saved_inst');
    localStorage.removeItem('careerbridge_decision_plan');
    setStudentPref(sampleDemoStudent);
    setParentPref(sampleDemoParent);
    setSavedInstitutions([]);
    setDecisionPlan({
      isLocked: false,
      courseId: "diploma-computer-engg",
      institutionId: "govt-polytechnic-chennai",
      careerMilestone: "Junior Software Developer",
      lockedAt: null,
      checklist: { c1: false, c2: false, c3: false, c4: false, c5: false }
    });
    addToast("Data reset to initial state.", 'info');
  };

  // Compute live match
  const matchResults = calculateMatch(studentPref, parentPref);

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        studentPref,
        setStudentPref,
        parentPref,
        setParentPref,
        matchResults,
        savedInstitutions,
        toggleSaveInstitution,
        selectedCourseId,
        setSelectedCourseId,
        selectedInstitutionId,
        setSelectedInstitutionId,
        decisionPlan,
        setDecisionPlan,
        loadDemoData,
        resetAllData,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
