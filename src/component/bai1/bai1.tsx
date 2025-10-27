import { useState } from "react";
import axios from "axios";

type WeatherInfo = {
  temp_C: string;
  weatherDesc: { value: string }[];
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState<WeatherInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) return alert("Vui lòng nhập tên thành phố!");
    setLoading(true);
    try {
      const { data } = await axios.get(`https://wttr.in/${city}?format=j1`);
      setInfo(data.current_condition[0]);
    } catch {
      alert("Không tìm thấy dữ liệu thời tiết!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>🌤️ Ứng dụng Thời tiết</h2>
      <div style={{ marginTop: 10 }}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập thành phố..."
          style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button onClick={getWeather} style={{ marginLeft: 8 }}>Xem</button>
      </div>

      {loading && <p>⏳ Đang tải...</p>}
      {info && (
        <div style={{ marginTop: 20 }}>
          <strong>Nhiệt độ:</strong> {info.temp_C}°C <br />
          <strong>Tình trạng:</strong> {info.weatherDesc[0].value}
        </div>
      )}
    </section>
  );
};

export default Weather;
