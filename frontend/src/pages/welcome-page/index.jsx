import { CardWelcome } from "../../components/card-welcome"
import { ContentPage } from "../../components/content-page"
import { Header } from "../../components/header"
import { getUser } from "../../services/rootLocalStorage"

export const WelcomePage = () => {
  const user = getUser()

  return (
    <ContentPage>
      <Header />
      <CardWelcome user={user} />
    </ContentPage>
  )
}
