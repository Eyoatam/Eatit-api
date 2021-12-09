import { NextFunction, Request, Response } from "express";
import { collections } from "services/database";
import { FoodCategory, Price } from "models/food";

export async function filterByCalorie(
  calorie: string,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) {
  // convert calorie to number
  const query = { calorie: parseInt(calorie) };
  const result = await collections.sharedFoods.find(query).toArray();
  if (result.length === 0) {
    res.status(500).json({
      message: `No food found with calorie amount ${calorie}`,
    });
  } else {
    res.status(200).send(result);
  }
}

export async function filterByCategory(
  category: string,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) {
  // capitalize the category ex: 'lunch' -> 'Lunch'
  category = (category as FoodCategory).charAt(0).toUpperCase() +
    category.slice(1);

  const query = {
    category,
  };
  const result = await collections.sharedFoods.find(query).toArray();

  if (result.length === 0) {
    res.status(500).json({
      message: `No food found with category ${category}`,
    });
  } else {
    res.status(200).send(result);
  }
}

export async function filterByPrice(
  price: string,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) {
  // capitalize the category ex: 'low' -> 'Low'
  price = (price as Price).charAt(0).toUpperCase() + price.slice(1);

  // declare variables to be used
  let query, result;

  // filter foods by category and price
  switch (price) {
    case "Low": {
      query = { price: { $lt: 100 } };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    }
    case "Mid":
      query = { price: { $gt: 100, $lt: 300 } };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    case "High":
      query = { price: { $gt: 300, $lt: 500 } };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    default:
      break;
  }
}

export async function filterByAll(
  category: string,
  price: string,
  calorie: string,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) {
  // capitalize the price and category fields in query
  // let price = req.query.price as string;
  price = price.charAt(0).toUpperCase() + price.slice(1);

  // let category = req.query.category as string;
  category = category.charAt(0).toUpperCase() + category.slice(1);

  // convert calorie to Number
  // const calorie = req.query.calorie as string;
  const convertedCalorie = parseInt(calorie);

  // declare variables to be used
  let query, result;

  // filter foods by category and price
  switch (price) {
    case "Low":
      // const filteredFood = checkCategory();
      query = {
        price: { $lt: 100 },
        category: category,
        calorie: convertedCalorie,
      };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;

    case "Mid":
      query = {
        price: { $gt: 100, $lt: 300 },
        category: category,
        calorie: convertedCalorie,
      };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    case "High":
      query = {
        price: { $gt: 300, $lt: 500 },
        category: category,
        calorie: convertedCalorie,
      };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    default:
      break;
  }
}

export async function filterByCategoryAndPrice(
  category: string,
  price: string,
  _req: Request,
  res: Response,
  _next?: NextFunction,
) {
  // capitalize the price and category fields in query
  price = price.charAt(0).toUpperCase() + price.slice(1);

  category = category.charAt(0).toUpperCase() + category.slice(1);

  // declare variables to be used
  let query, result;

  // filter foods by category and price
  switch (price) {
    case "Low":
      // const filteredFood = checkCategory();
      query = { price: { $lt: 100 }, category: category };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;

    case "Mid":
      query = { price: { $gt: 100, $lt: 300 }, category: category };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    case "High":
      query = { price: { $gt: 300, $lt: 500 }, category: category };
      result = await collections.sharedFoods.find(query).toArray();
      // check if there is no match
      if (result.length === 0) {
        res.status(500).json({
          ok: false,
          message: `No Food Matches your search`,
        });
      } else {
        res.status(200).send(result);
      }
      break;
    default:
      break;
  }
}