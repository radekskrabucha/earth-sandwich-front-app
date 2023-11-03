import { getLSP3ProfileData } from './utils'

type ProfilePageParams = {
  address: string
}

type ProfilePageProps = {
  params: ProfilePageParams
}

export const ProfilePage: React.FC<ProfilePageProps> = async ({
  params: { address }
}) => {
  const profile = await getLSP3ProfileData(address)

  return (
    <div>
      <p>ProfilePage</p>
      <p>name: {profile.name}</p>
      <p>description: {profile.description}</p>
    </div>
  )
}
