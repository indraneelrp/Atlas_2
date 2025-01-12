import { router } from '../trpc'
import { authRouter } from './auth'
import { announcementRouter } from './admin/announcement'
import { memberRouter } from './member'
import { profileRouter } from './profile'
import { userRouter } from './admin/users'

export const appRouter = router({
  auth: authRouter,
  announcement: announcementRouter,
  member: memberRouter,
  profile: profileRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter
