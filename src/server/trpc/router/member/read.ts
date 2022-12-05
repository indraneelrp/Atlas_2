import { protectedProcedure } from '../../trpc'
import { z } from 'zod'
import { TRPCError } from '@trpc/server'

export const getMemberProfile = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input,
        },
        select: {
          name: true,
          gender: true,
          batch: true,
          year: true,
          faculty: true,
          image: true,
          telegram: true,
          discord: true,
          email: true,
          personal_email: true,
          hobbies: true,
          department: true,
          roles: true,
          major: true,
        },
      })

      if (!user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'No user found',
        })
      }

      return { user }
    } catch (e) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: (e as Error).message,
      })
    }
  })

export const getMemberImage = protectedProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    try {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input,
        },
        select: {
          image: true,
        },
      })
      return user
    } catch (error) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'error retrieving image' + error,
      })
    }
  })