import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MOONGODB_URI, { dbName: "codewithNitin" });
        console.log('DB connected successfully');
    } catch (error) {
        console.log(error);
        console.error('Error details:');
    }
}
