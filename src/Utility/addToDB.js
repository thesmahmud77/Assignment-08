import { toast } from "react-toastify";

const getStoredBook = () => {
  const StoredBookSTR = localStorage.getItem("appList");
  if (StoredBookSTR) {
    const StoredBookData = JSON.parse(StoredBookSTR);
    return StoredBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedbookData = getStoredBook();
  if (storedbookData.includes(id)) {
    alert("Already Exist");
  } else {
    storedbookData.push(id);
    const data = JSON.stringify(storedbookData);
    localStorage.setItem("appList", data);
    toast("App Install Successfully!");
  }
};

const removeFromStoredDB = (id) => {
  const storedData = getStoredBook();
  const remainingData = storedData.filter((appId) => appId != id);
  localStorage.setItem("appList", JSON.stringify(remainingData));
  // toast.success("App Uninstalled Successfully!");

  alert("App Uninstalled Successfully!");
};
export { addToStoredDB, getStoredBook, removeFromStoredDB };
