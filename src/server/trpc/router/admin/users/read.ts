import { protectedProcedure } from '~/server/trpc/trpc'
import { TRPCError } from '@trpc/server'

export default protectedProcedure.query(async ({ ctx }) => {
  try {
    const users = await ctx.prisma.user.findMany({
      select: {
        department: true,
        discord: true,
        email: true,
        id: true,
        name: true,
        telegram: true,
      },
    })

    return users
  } catch (e) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: (e as Error).message,
    })
  }
})
