import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'
import { connectToDatabase } from '../../../pages/utils/db'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user, account, profile}) {
        console.log(user.id)
      // Connect to the database
      const { db, client } = await connectToDatabase();

      try {
        // Store user details in the database
       const result = await db.collection('users').insertOne({
          user:user
          // You can store additional user data as needed
        });
        console.log("Inserted user:", result.insertedId);
      } catch (error) {
        console.error('Error storing user data:', error);
      } finally {
        // Close the database connection
        await client.close();
      }

      return true;
    },
    // Add other callbacks as needed
  },
});