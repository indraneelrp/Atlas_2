import { router } from '~/server/trpc/trpc'
import { getMemberProfile, getMemberImage } from './read'
import { updateMemberImage } from './update'
import { deleteMemberImage } from './delete'

export const memberRouter = router({
  deleteMemberImage,
  getMemberImage,
  getMemberProfile,
  updateMemberImage,
})