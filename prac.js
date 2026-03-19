async function prac() {
  const res = await fetch("https://viaje.ai/seatinfo_api/");
  console.log(res.json());
}
