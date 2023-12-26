import { CardWelcome } from "../../components/card-welcome"
import { ContentPage } from "../../components/content-page"
import { Header } from "../../components/header"

export const WelcomePage = () => {
  return (
    <ContentPage>
      <Header />
      <CardWelcome />
    </ContentPage>
  )
}
