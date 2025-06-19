const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token"); // contoh ambil token dari localStorage

export const getStaffImageUrl = (imagePath) => {
  return `${BASE_URL}/media/${imagePath}`;
};

export const getData = async (url) => {
  try {
    const res = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken() ? `Bearer ${getToken()}` : undefined,
      },
    });

    if (res.status === 401) {
      // token expired or unauthorized, handle logout or redirect login
      return { isExpiredJWT: true };
    }

    if (res.status >= 200 && res.status < 300) {
      if (res.status === 204) return null; // No Content
      return await res.json();
    }

    // handle other errors
    const errorText = await res.text();
    throw new Error(errorText || "Fetch error");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendData = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",  // wajib set ini supaya backend tahu ini JSON
    },
    body: JSON.stringify(data), // harus stringify data JSONnya
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      // Bisa tambahkan log untuk error handling lebih baik
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};


export const deleteData = async (url) => {
  try {
    const res = await fetch(BASE_URL + url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken() ? `Bearer ${getToken()}` : undefined,
      },
    });

    if (res.status === 401) {
      return { isExpiredJWT: true };
    }

    if (res.status >= 200 && res.status < 300) {
      if (res.status === 204) return null;
      return await res.json();
    }

    const errorText = await res.text();
    throw new Error(errorText || "Fetch error");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
