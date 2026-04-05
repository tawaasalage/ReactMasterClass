const fetchUsers = async () => {
  try {
    const res = await fetch("https://fake-json-api.mock.beeceptor.com/users");
    if (!res.ok) {
      throw new Error("Failed");
    }
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const fetchCompanies = async () => {
  try {
    const res = await fetch(
      "https://fake-json-api.mock.beeceptor.com/companies",
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export { fetchCompanies, fetchUsers };
