const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

/*
| HELMET
| Helmet აყენებს სხვადასხვა HTTP უსაფრთხოების header-ებს.
| იცავს აპლიკაციას ისეთი შეტევებისგან, როგორიცაა:
| - XSS (Cross-Site Scripting)
| - Clickjacking
| - MIME-type sniffing
|
| მარტივად რომ ვთქვათ: ბრაუზერს ეუბნება "როგორ მოიქცეს უსაფრთხოდ"
*/
app.use(helmet());

/*
| EXPRESS JSON
| საშუალებას აძლევს სერვერს მიიღოს JSON მონაცემები
*/
app.use(express.json());

/*

| MONGO SANITIZE
| იცავს MongoDB-ს NoSQL Injection შეტევებისგან.
| აშორებს ისეთ საშიშ სიმბოლოებს request-იდან, როგორიცაა:
| $ , .
|
| მაგალითი შეტევა:
| { "email": { "$gt": "" } }
|
| ეს middleware ამას ავტომატურად წმენდს
*/
app.use(mongoSanitize());

/*
| RATE LIMIT
| ზღუდავს მოთხოვნების რაოდენობას ერთი IP-დან
| კონკრეტულ დროში.
|
| იცავს:
| - Brute force შეტევებისგან
| - DoS შეტევებისგან
|
| ქვემოთ: მაქსიმუმ 100 request 15 წუთში
*/
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 წუთი
  max: 100, // მაქსიმუმ 100 მოთხოვნა
  message: "Too many requests, please try again later"
});

app.use("/api", limiter);

module.exports = app;
