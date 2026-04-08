async function loadFoods() {
  const { data, error } = await window.supabaseClient
    .from('food_data')
    .select('*');

  if (error) {
    console.error("ERROR:", error);
    return;
  }

  console.log("DATA:", data);

  const container = document.getElementById("foodList");
  container.innerHTML = "";

  data.forEach(food => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <div class="food-name">${food.food_name}</div>
      <div class="category">${food.category}</div>
    `;

    // 🔥 Navigate to food page with ID
    card.addEventListener("click", () => {
      window.location.href = `food.html?id=${food.food_id}`;
    });

    container.appendChild(card);
  });
}

loadFoods();
