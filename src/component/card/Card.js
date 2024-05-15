import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid } from "@mui/material";

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
          LOADING...
        </div>
      )}

      {data.map((post) => (
        <Grid item xs={10} sm={5} md={4} key={post.id}>
          <Box
            sx={{
              border: "1px solid #000",
              borderRadius: "15px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              padding: "10px",
              margin: "10px",
              height: "100%",
            }}
          >
            <Typography padding={"10px"}>
              <Typography
                variant="h6"
                sx={{ color: "#5B067F" }}
                fontWeight={"400"}
                fontSize={"20px"}
              >
                {post.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#938585" }}
                fontSize={"14px"}
              >
                {post.body}
              </Typography>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
