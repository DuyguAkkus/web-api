//
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";
import "./CardStyle.css";

function Card() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3")
      .then((response) => setData(response.data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Grid
      container
      spacing={6}
      justifyContent={"center"}
      style={{ padding: "20px" }}
    >
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          LOADİNG...
        </div>
      )}

      {data.map((post) => (
        <Grid item xs={10} sm={5} md={4} key={post.id}>
          <Box
            className="card"
            sx={{
              padding: "10px",
              margin: "10px",
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ color: "#8b008b" }}>
              {post.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#696969" }}>
              {post.body}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
