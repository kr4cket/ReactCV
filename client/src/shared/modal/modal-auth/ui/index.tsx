import { FC, useEffect } from "react"
import { Sheet, SheetContent } from "@/shared/ui/sheet"
import { IModalAuth, TLoginData } from "../type/modal-auth-type"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { Link } from "react-router-dom"
import { Paths } from "@/shared/nav"

export const ModalAuth:FC<IModalAuth> = ({open, setOpen}) => {
  const authForm = useForm<TLoginData>();

  const onSubmit:SubmitHandler<TLoginData> = (data) => {
    console.log('Логин:', data.login);
    console.log('Пароль:', data.password);
    setOpen(false);
  }

  useEffect(() => {
    if (!open){
      authForm.reset();
    }
  }, [open, authForm])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col justify-center">
            <h4 className="font-medium text-xl text-center">Войти в аккаунт</h4>

            <Form {...authForm}>
              <form onSubmit={authForm.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField
                  control={authForm.control}
                  name="login"
                  rules={{
                    required: "Введите логин",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: 'Логин должен содержать только буквы и цифры',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-light">Логин</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите логин" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs font-light"/>
                    </FormItem>
                  )}
                />

                <FormField
                  control={authForm.control}
                  name="password"
                  rules={{
                    required: "Введите пароль",
                    pattern: {
                      value: /^(?=.*\d).{8,}$/,
                      message: 'Пароль должен быть не менее 8 символов и содержать хотя бы одну цифру',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-light">Пароль</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Введите пароль" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs font-light"/>
                    </FormItem>
                  )}
                />

                <hr/>

                <div className="flex flex-col gap-2">
                  <Button type="submit" className="w-full">Войти</Button>
                  
                  <div className="flex items-center justify-between">
                    <Button variant={"link"} onClick={() => setOpen(false)}>
                      <Link to={Paths.LOGIN} className="text-xs font-light">Нет аккаунта?</Link>
                    </Button>

                    <Button variant={"link"} onClick={() => setOpen(false)}>
                      <p className="text-xs font-light">Забыли пароль?</p>
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
        </SheetContent>
    </Sheet>
  )
}
