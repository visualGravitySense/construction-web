import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CheckCircle, Mail, Clock, User, Phone, Briefcase, MessageSquare, Zap, Sparkles } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Nimi peab olema vähemalt 2 tähemärki"),
  phone: z.string().min(5, "Palun sisestage kehtiv telefoninumber"),
  email: z.string().email("Palun sisestage kehtiv email"),
  service: z.string().optional(),
  message: z.string().min(10, "Sõnum peab olema vähemalt 10 tähemärki"),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  })

  const services = [
    'Peatöövõtt ja projektijuhtimine',
    'Ehitusalane konsultatsioon',
    'Betooni- ja montaažitööd',
    'Betoonpõrandad',
    'Omanikujärelvalve',
    'Transporditeenus'
  ];

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Имитация отправки
    setTimeout(() => {
      console.log('Contact form submitted:', values);
      alert('Täname! Võtame teiega ühendust varsti.');
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  const isFormValid = form.formState.isValid;

  return (
    <Card className="shadow-xl border-2 border-gray-100 overflow-hidden">
      <CardHeader className="pb-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2.5 shadow-lg">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Küsi pakkumist!
          </CardTitle>
        </div>
        <CardDescription className="text-base text-gray-600">
          Jäta oma andmed ja me võtame teiega ühendust varsti
        </CardDescription>
        
        {/* MOTIVATION: Улучшенное социальное доказательство */}
        <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 rounded-lg p-1.5">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-semibold text-green-900">Vastame 24h jooksul</span>
            </div>
            <div className="w-px h-4 bg-green-200"></div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 rounded-lg p-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-semibold text-blue-900">Tasuta konsultatsioon</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Nimi и Telefon в одной строке */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Поле имени */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <User className="w-4 h-4 text-blue-600" />
                      Nimi <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Jaan Tamm" 
                          {...field}
                          className="h-12 pl-10 border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле телефона */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <Phone className="w-4 h-4 text-green-600" />
                      Telefon <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type="tel"
                          placeholder="+372 5XXX XXXX" 
                          {...field}
                          className="h-12 pl-10 border-2 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email и Teenus в одной строке */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Поле email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <Mail className="w-4 h-4 text-purple-600" />
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type="email"
                          placeholder="teie@email.ee" 
                          {...field}
                          className="h-12 pl-10 border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Поле Teenus */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <Briefcase className="w-4 h-4 text-orange-600" />
                      Teenus <span className="text-gray-400 text-xs font-normal">(valikuline)</span>
                    </FormLabel>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all pl-10">
                            <SelectValue placeholder="Vali teenus (või jäta tühjaks)" />
                          </SelectTrigger>
                        </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Поле сообщения */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                    <MessageSquare className="w-4 h-4 text-indigo-600" />
                    Sõnum <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea 
                        rows={5}
                        placeholder="Kirjeldage oma küsimust või projekti üksikasju..."
                        {...field}
                        className="resize-none border-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all pl-10 pt-3"
                      />
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Кнопка отправки - максимально контрастная и заметная */}
            <div className="relative">
              {isFormValid && (
                <>
                  {/* Многослойное зеленое свечение для максимальной заметности */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-xl blur-2xl opacity-70 animate-pulse -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur-xl opacity-50 -z-10"></div>
                </>
              )}
              <Button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
                className={`relative w-full h-20 text-xl font-extrabold transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] ${
                  isFormValid 
                    ? 'bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white border-4 border-white/40 ring-8 ring-green-400/40 hover:ring-emerald-400/60 shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.7)]' 
                    : 'bg-gray-400 cursor-not-allowed border-2 border-gray-300 shadow-lg'
                }`}
                size="lg"
                style={isFormValid ? {
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  boxShadow: '0 10px 40px rgba(34, 197, 94, 0.5), 0 0 20px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-7 h-7 border-[3px] border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span className="text-xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Saadetakse...</span>
                  </>
                ) : (
                  <>
                    <div className="bg-white/40 rounded-xl p-2.5 mr-4 backdrop-blur-md shadow-lg">
                      <Zap className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" fill="white" />
                    </div>
                    <span className="text-xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] tracking-wide">
                      Saada pakkumise päring
                    </span>
                    <div className="bg-white/40 rounded-xl p-2.5 ml-4 backdrop-blur-md shadow-lg">
                      <Sparkles className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-pulse" fill="white" />
                    </div>
                  </>
                )}
              </Button>
            </div>
            
            {/* Улучшенные гарантии */}
            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-green-600" />
                  <span>Vastame 24h jooksul</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <a href="tel:+37212345678" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Helista: +372 1234 5678</span>
                </a>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
