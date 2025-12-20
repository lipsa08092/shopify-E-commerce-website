
export const setDefaultAdmin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const adminExists = users.find((u) => u.role === "admin");

  if (!adminExists) {
    const adminUser = {
      id: 1,
      name: "Lipsa dey",
      email: "lipsadey@gmail.com",
      password: "admin123",
      role: "admin",
      phone: "6371871004",
      gender: "female",
      address: "123 Main St, BBSR, Odisha",
      avatar: "https://www.pngarts.com/files/3/Girl-Avatar-PNG-Photo.png" 
    };

    users.push(adminUser);
    localStorage.setItem("users", JSON.stringify(users));
  }
};
