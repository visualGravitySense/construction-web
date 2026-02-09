import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, CheckCircle, Zap, Sparkles, Shield, Clock, Mail, HelpCircle, TrendingUp, Users, Phone } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Nimi peab olema vähemalt 2 tähemärki"),
  phone: z.string().min(5, "Palun sisestage kehtiv telefoninumber"),
  email: z.string().email("Palun sisestage kehtiv email"),
  service: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const QuickForm = () => {
  const [progress, setProgress] = useState(0);
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

  const watchedValues = form.watch();

  useEffect(() => {
    const requiredFields = ['name', 'phone', 'email'];
    const optionalFields = ['service', 'message'];
    
    const requiredFilled = requiredFields.filter(field => watchedValues[field as keyof FormValues]).length;
    const optionalFilled = optionalFields.filter(field => watchedValues[field as keyof FormValues]).length;
    
    const requiredProgress = (requiredFilled / requiredFields.length) * 60;
    const optionalProgress = (optionalFilled / optionalFields.length) * 40;
    setProgress(requiredProgress + optionalProgress);
  }, [watchedValues]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Имитация отправки
    setTimeout(() => {
      console.log('Form submitted:', values);
      alert('Täname! Võtame teiega ühendust varsti.');
      form.reset();
      setProgress(0);
      setIsSubmitting(false);
    }, 1000);
  }

  const isFormValid = form.formState.isValid;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Мотивация: Визуальный акцент */}
          <Badge variant="secondary" className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Kontaktvorm
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Küsi pakkumist!
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Jäta oma andmed ja me võtame teiega ühendust varsti
          </p>
          
          {/* Мотивация: Срочность и выгода */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span>Tasuta konsultatsioon • Vastame 24h jooksul</span>
          </div>
        </div>
        
        <Card className="shadow-2xl border-0">
          <CardHeader>
            {/* Способность: Прогресс заполнения формы */}
            {progress > 0 && progress < 100 && (
              <div className="mb-4 animate-in fade-in slide-in-from-top-2">
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="text-gray-600 font-medium">Vormi täitmine</span>
                  <span className="text-blue-600 font-bold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="h-full bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                {progress === 100 && (
                  <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Vorm on täidetud!
                  </p>
                )}
              </div>
            )}

            {/* Мотивация: Подсказка перед формой с социальным доказательством */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 text-sm mb-1 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Kiire vastus garanteeritud
                  </p>
                  <p className="text-blue-700 text-xs mb-2">Täidke vorm ja saame teiega ühendust 24 tunni jooksul</p>
                  <div className="flex items-center gap-4 text-xs text-blue-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>100+ klienti</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>100% rahulolu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Способность: Улучшенное поле имени с подсказками */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          Nimi <span className="text-red-500">*</span>
                          <div className="group relative ml-auto">
                            <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                            <div className="absolute right-0 top-6 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 w-48 z-10">
                              Sisestage oma täisnimi, et me saaksime teiega isiklikult ühendust võtta
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Näiteks: Jaan Tamm" 
                              {...field}
                              className="h-12 pl-10"
                            />
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </FormControl>
                        {form.formState.errors.name && <FormMessage />}
                        {field.value && !form.formState.errors.name && (
                          <p className="text-green-600 text-xs flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                            <CheckCircle className="w-3 h-3" />
                            Korras
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Способность: Улучшенное поле телефона с подсказками */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          Telefon <span className="text-red-500">*</span>
                          <div className="group relative ml-auto">
                            <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                            <div className="absolute right-0 top-6 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 w-48 z-10">
                              Võtame teiega ühendust telefonil, et arutada teie projekti üksikasju
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              type="tel"
                              placeholder="+372 5XXX XXXX" 
                              {...field}
                              className="h-12 pl-10"
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </FormControl>
                        {form.formState.errors.phone && <FormMessage />}
                        {field.value && !form.formState.errors.phone && (
                          <p className="text-green-600 text-xs flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                            <CheckCircle className="w-3 h-3" />
                            Korras
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Способность: Улучшенное поле email с подсказками */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Email <span className="text-red-500">*</span>
                        <div className="group relative ml-auto">
                          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute right-0 top-6 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 w-56 z-10">
                            Saadame teile pakkumise ja täpsustame detaile emaili teel
                          </div>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="email"
                            placeholder="teie@email.ee" 
                            {...field}
                            className="h-12 pl-10"
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </FormControl>
                      {form.formState.errors.email && <FormMessage />}
                      {field.value && !form.formState.errors.email && (
                        <p className="text-green-600 text-xs flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                          <CheckCircle className="w-3 h-3" />
                          Korras
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                
                {/* Способность: Улучшенное поле услуги с подсказками */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        Teenus <span className="text-gray-400 text-sm font-normal">(valikuline)</span>
                        <div className="group relative ml-auto">
                          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute right-0 top-6 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 w-56 z-10">
                            Valige teenus, et saada täpsemat pakkumist. Võite ka jätta tühjaks.
                          </div>
                        </div>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Vali teenus (või jäta tühjaks)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="peatöövõtt">Peatöövõtt</SelectItem>
                          <SelectItem value="ehitusjuhtimine">Ehitusjuhtimine</SelectItem>
                          <SelectItem value="betoonitööd">Betoonitööd</SelectItem>
                          <SelectItem value="betoonpõrandad">Betoonpõrandad</SelectItem>
                          <SelectItem value="transporditeenus">Transporditeenus</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                      {field.value && (
                        <p className="text-blue-600 text-xs flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                          <CheckCircle className="w-3 h-3" />
                          Valitud: {field.value}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                
                {/* Способность: Улучшенное поле сообщения с подсказками */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Sõnum <span className="text-gray-400 text-sm font-normal">(valikuline)</span>
                        <div className="group relative ml-auto">
                          <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute right-0 top-6 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 w-64 z-10">
                            Kirjeldage oma projekti, ajakava või erisoovid. Mida rohkem infot, seda täpsem pakkumine.
                          </div>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Näiteks: Vajan betoonpõrandat 200 m² suuruses ruumis. Soovin kvaliteetset lahendust konkurentsivõimelise hinnaga."
                          {...field}
                          className="resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                      <div className="flex items-start gap-2 text-xs text-gray-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <Zap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Nõuanne:</strong> Mida rohkem infot annate (suurus, ajakava, eelarve), seda täpsema pakkumise saame koostada ja seda kiiremini saame teiega ühendust võtta.
                        </span>
                      </div>
                      {field.value && field.value.length > 0 && (
                        <p className="text-blue-600 text-xs flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                          <CheckCircle className="w-3 h-3" />
                          {field.value.length} tähemärki sisestatud
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                
                {/* Подсказки: Улучшенная кнопка отправки с мотивацией */}
                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    disabled={!isFormValid || isSubmitting}
                    className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Saadetakse...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 w-5 h-5" />
                        <span>Saada päring ja saada tasuta pakkumine</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  {/* Мотивация: Дополнительная информация о кнопке */}
                  {!isFormValid && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                      <HelpCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-yellow-800">
                        <strong>Täitke kõik kohustuslikud väljad</strong> (märgistatud <span className="text-red-500">*</span>), et saada pakkumist.
                      </p>
                    </div>
                  )}
                  
                  {isFormValid && !isSubmitting && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-green-800">
                        <strong>Vorm on valmis!</strong> Vajutage nuppu, et saada pakkumist. Vastame 24 tunni jooksul.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Мотивация: Гарантии и выгоды */}
                <div className="flex flex-wrap gap-4 justify-center text-sm pt-6 border-t">
                  <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Tasuta konsultatsioon
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                    <Clock className="w-4 h-4 mr-2" />
                    Vastame 24h jooksul
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100">
                    <Shield className="w-4 h-4 mr-2" />
                    Privaatsus garanteeritud
                  </Badge>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickForm;
