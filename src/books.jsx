import React, { useEffect, useState } from "react";
import { getData } from "../utils/api";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");

      const data = await getData("/books", token);

      if (data.isExpiredJWT) {
        setError("Token expired. Silakan login ulang.");
        setBooks([]);
      } else if (Array.isArray(data.data)) {
        setBooks(data.data);
      } else if (data.message) {
        setError(data.message);
      } else {
        setError("Gagal memuat data buku.");
      }
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <div style={{ textAlign: "center", padding: 20 }}>Loading books...</div>;

  if (error) return <div style={{ color: "red", textAlign: "center", padding: 20 }}>{error}</div>;

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, color: "#2c3e50" }}>Daftar Buku</h2>

      {books.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic", color: "#7f8c8d" }}>Tidak ada buku tersedia.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 20,
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                backgroundColor: "#ecf0f1",
                borderRadius: 10,
                padding: 20,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <h3 cl>{book.judul}</h3>
              <p class="text-2xl text-fuchsia-500">{book.deskripsi}</p>
            </div>
            
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Books;
