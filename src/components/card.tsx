import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Book } from "../store/types";

interface Props {
  book: Book;
}

export default function MediaCard({ book }: Props) {
  const navigate = useNavigate();
  const detailHandler = () => {
    navigate("/booksData/" + book.id);
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 750,
        margin: 2,
      }}
    >
      <CardMedia
        sx={{
          minWidth: 300,
          minHeight: 300,
          display: "flex",
          justifyContent: "center",
        }}
        image={book.volumeInfo?.imageLinks?.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.volumeInfo?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(book.volumeInfo?.categories || []).join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(book.volumeInfo?.authors || []).join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => detailHandler()}
          size="small"
          sx={{ color: "red", margin: "0 auto" }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
