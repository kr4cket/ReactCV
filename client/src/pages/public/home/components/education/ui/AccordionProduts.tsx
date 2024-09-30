import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion"
import { MainProductsModel } from "../model/EducationModel.tsx"

export const AccordionProduts = () => {
  return (
    <Accordion type={"multiple"} defaultValue={[...MainProductsModel.map((_, index) => `item-${index + 1}`)]}>
        {
            MainProductsModel.map((el, index) => <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>{el.head}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-black/70 dark:text-white/50">
                  {el.title}
                </p>
                <br/>
                <p className="text-sm text-black/70 dark:text-white/50">
                  {el.years}
                </p>
              </AccordionContent>
            </AccordionItem>)
        }
    </Accordion>
  )
}
