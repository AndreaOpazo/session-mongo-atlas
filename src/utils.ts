import { Product, Message } from './types';
import mongoose from 'mongoose';
import { prodModel } from './models/products';
import { msgModel } from './models/messages';

class Utils {
  static async connectToDb() {
    try {
      await mongoose.connect("mongodb://localhost:27017/ecommerce");
    } catch (error) {
      console.log(error);
    };
  };

  static async getAllProducts() {
    try {
      return await prodModel.find().lean();
    } catch (error) {
      console.error(error);
    };
  };

  static async getProductByID(id: string) {
    try {
      return await prodModel.findById(id);
    } catch (error) {
      console.error(error);
    };
  };

  static async saveProduct(product: Product) {
    try {
      await prodModel.create(product);
    } catch (error) {
      console.error(error);
    };
  };

  static async updateProduct(product: Product, id: string) {
    try {
      return await prodModel.findByIdAndUpdate(id, product)
    } catch (error) {
      console.error(error);
    };
  };

  static async deleteProduct(id: string) {
    try {
      const productToDelete = await prodModel.findByIdAndDelete(id);
      return productToDelete;
    } catch (error) {
      console.error(error);
    };
  };
};

//Las funciones a continuacion, son para los messages
export const getMessages = async () => {
  try {
    return await msgModel.find();
  } catch (error) {
    console.error(error);
  }
};

export const updateMessages = async (message: Message[]) => {
  try {
    await msgModel.insertMany(message);
  } catch (error) {
    console.error(error);
  };
};

export default Utils;