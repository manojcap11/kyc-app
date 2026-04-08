async function loadFood() {

  // ✅ GET ID FROM URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  console.log("SELECTED ID:", id);

  // ✅ FETCH ONLY THAT FOOD
  const { data, error } = await window.supabaseClient
    .from('food_data')
    .select('*')
    .eq('food_id', id)
    .single();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error || !data) {
    document.getElementById("foodName").innerText = "No data found";
    return;
  }

  // ✅ USE DIRECT OBJECT (NOT ARRAY)
  const food = data;

  document.getElementById("foodName").innerText = food.food_name;
  document.getElementById("calories").innerText = food.calories_per_100g + " kcal";

  document.getElementById("proteinText").innerText = food.protein_per_100g + "g";
  document.getElementById("fatText").innerText = food.fat_per_100g + "g";
  document.getElementById("carbsText").innerText = food.carbs_per_100g + "g";

  document.getElementById("aiText").innerText =
    food.calories_per_100g > 180
      ? "High calorie food. Consider smaller portion."
      : "Balanced food choice.";
}

loadFood();
