// 
import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import {connectToDatabase} from '../../../pages/utils/db'

export default NextAuth({
  providers:[
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET,
      secret:process.env.secret
    })
  ],
  callbacks:{
    async signIn({user,profile,account}) {
      const {client,db} = await connectToDatabase()

      try {
        const result = await db.collection('users').insertOne({
          user:user,
        })
        console.log('User inserted with UserId',result.insertedId)
      }
      catch(error) {
        console.log('Failure in inserting data',error)
      }
      finally{
         await client.close()
      }
      return true


      }
    }
})