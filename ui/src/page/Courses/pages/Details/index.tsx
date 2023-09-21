import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export default function CourseDetails() {
  const { colors } = useTheme();

  return (
    <>
      <Link to="/courses">
        <Button variant="secondary">
          <ArrowLeftToLine size={'1.6rem'} color={colors.icon}/>
          Voltar
        </Button>
      </Link>

      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Detalhes do curso</Banner.Title>
        </Banner.Header>
      </Banner.Root>
    </>
  )
}