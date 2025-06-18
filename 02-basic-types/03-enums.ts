// Enums (перерахування)

// Числові перерахування
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move: Direction = Direction.Up;

console.log(move);

// Строкові перерахування
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

const favouriteColor: Color = Color.Blue;

console.log(favouriteColor);

// Користувацькі перерахування
enum ResponseCode {
    Ok = 200,
    NotFound = 404,
    InternalServerError = 500
}

const response: ResponseCode = ResponseCode.Ok;

console.log(response);

// Змішані типи
enum Mixed {
    No = 0,
    Yes = "YES",
}

// Помилки
// const wrongDirection: Direction = 4; // Type '4' is not assignable to type 'Direction'.
// const wrongColor: Color = "Purple"; // Type '"Purple"' is not assignable to type 'Color'.