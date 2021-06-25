package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/pusher/pusher-http-go"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	pusherClient := pusher.Client{
		AppID:   "1225517",
		Key:     "6f50542e3ef4e98030be",
		Secret:  "fe8745dc706799768e85",
		Cluster: "us2",
		Secure:  true,
	}

	app.Post("/api/messages", func(c *fiber.Ctx) error {
		data := map[string]string{"message": "hello world"}

		if err := c.BodyParser(&data); err != nil {
			return err
		}

		pusherClient.Trigger("chat", "message", data)

		return c.JSON([]string{})
	})

	app.Listen(":8000")
}
