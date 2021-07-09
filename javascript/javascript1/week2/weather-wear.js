function clothesRecomended(temperature) {
    if (temperature > 17)
        console.log("shorts and a t-shirt");
    else if (temperature > 10 && temperature <= 17)
        console.log("Hoodie-Jeans");
    else if (temperature <= 10)
        console.log("Winter Jacket and winter pants with shoes");
    else console.log("Un-known temperature");
}
clothesRecomended(18); // Logs out: "shorts and a t-shirt"