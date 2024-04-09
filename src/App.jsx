import { useEffect } from "react";
import { useState } from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
function App() {
  const [selectOptionDiseases, setSelectOptionDiseases] = useState([]);

  const optionDiseases = [
    { value: "mideUlseri", label: "Mide Ülseri" },
    { value: "kalpKrizi", label: "Kalp Krizi" },
    { value: "şekerHastalığı", label: "Şeker Hastalığı" },
    { value: "astım", label: "Astım" },
    { value: "tansiyon", label: "Tansiyon (Hipertansiyon/Hipotansiyon)" },
  ];

  const [selectOptionMeals, setSelectOptionMeals] = useState([]);

  const optionMeals = [
    { value: "breakfast", label: "Kahvaltı" },
    { value: "lunch", label: "Öğle Yemeği" },
    { value: "snack", label: "Ara Öğün" },
    { value: "dinner", label: "Akşam Yemeği" },
  ];

  const [selectOptionNutrition, setSelectOptionNutrition] = useState([]);

  const optionNutrition = [
    { value: "Meyve", label: "Meyve" },
    { value: "Kivi", label: "Kivi" },
    { value: "Kayisi", label: "Kayısı" },
    { value: "Et", label: "Et" },
    { value: "Tavuk", label: "Tavuk" },
    { value: "Kirmizi et", label: "Kırmızı et" },
    { value: "Hindi", label: "Hindi" },
    { value: "Patates", label: "Patates" },
    { value: "Domates", label: "Domates" },
    { value: "Salatalik", label: "Salatalık" },
    { value: "Sogan", label: "Soğan" },
    { value: "Maydanoz", label: "Maydanoz" },
    { value: "Elma sirkesi", label: "Elma sirkesi" },
    { value: "Zeytinyagi", label: "Zeytinyağı" },
    { value: "Limon", label: "Limon" },
    { value: "Pulbiber", label: "Pulbiber" },
    { value: "Karabiber", label: "Karabiber" },
    { value: "Lahana", label: "Lahana" },
    { value: "Tuz", label: "Tuz" },
    { value: "Un", label: "Un" },
    { value: "Labne", label: "Labne" },
    { value: "Çörekotu", label: "Çörekotu" },
    { value: "Yulaf", label: "Yulaf" },
    { value: "Yumurta", label: "Yumurta" },
    { value: "Salça", label: "Salça" },
    { value: "Tereyağı", label: "Tereyağı" },
    { value: "Şehriye", label: "Şehriye" },
  ];

  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const Personal = {
      PhoneNumber: formData.get("PhoneNumber"),
      Firstname: formData.get("Firstname"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      age: formData.get("date"),
      height: formData.get("height"),
      weight: formData.get("weight"),
      gender: formData.get("gender"),
    };
    const meal = {
      meals: selectOptionMeals.map((option) => option.value),
      nutrition: selectOptionNutrition.map((option) => option.value),
    };
    const PrivateSituation = {
      IsPregnant: formData.get("IsPregnant"),
      Diseases: selectOptionDiseases.map((option) => option.value),
    };
    const formDataObject = [
      {
        Personal,
        meal,
        PrivateSituation,
      },
    ];

    console.log(formDataObject);
  };

  const [gender, setGender] = useState("");
  const [isPregnantVisible, setIsPregnantVisible] = useState(false);
  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    setIsPregnantVisible(selectedGender === "Kadın");
  };
  return (
    <>
      <div className="flex items-center justify-center p-8 w-full bg-gray-300">
        <div className="mx-auto w-full max-w-[550px] border p-5 bg-white ">
          <form onSubmit={handleForm}>
            <div className="flex mb-5 gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="Firstname"
                  className="block text-base font-medium text-[#07074D] mb-3"
                >
                  İsminiz
                </label>
                <input
                  type="text"
                  name="Firstname"
                  id="Firstname"
                  placeholder="İsim"
                  className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-base font-medium text-[#07074D] mb-3"
                >
                  Soy İsminiz
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Soy İsminiz"
                  className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full"
                />
              </div>
            </div>

            <div className="flex mb-5 gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-base font-medium text-[#07074D] mb-3"
                >
                  Tel. Numaranız
                </label>
                <InputMask
                  mask={"(999) 999-999"}
                  type="text"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  placeholder="(555) 123-456"
                  className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-[#07074D] mb-3"
                >
                  E-Mail 
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-Mail Adresiniz"
                  className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full"
                />
              </div>
            </div>
            <div className="mb-5 pt-3">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/3">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="block text-base font-medium text-[#07074D] mb-3"
                    >
                      Yaşınız
                    </label>
                    <input
                      type="number"
                      name="date"
                      id="date"
                      placeholder="Örn 34"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                  <div className="mb-5">
                    <label
                      htmlFor="height"
                      className="block text-base font-medium text-[#07074D] mb-3"
                    >
                      Boyunuz
                    </label>
                    <input
                      type="number"
                      name="height"
                      id="height"
                      placeholder="Örn 175"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/3">
                  <div className="mb-5">
                    <label
                      htmlFor="weight"
                      className="block text-base font-medium text-[#07074D] mb-3"
                    >
                      Kilonuz
                    </label>
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      placeholder="Örn 70"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h3 className="text-base font-medium text-[#07074D] mb-3">
                  Cinsiyetiniz
                </h3>
                <div className="border rounded-md p-4 flex items-center justify-between">
                  <div>
                    <input
                      type="radio"
                      id="gender1"
                      name="gender"
                      value="Erkek"
                      className="hidden"
                      onChange={handleGenderChange}
                    />
                    <label
                      htmlFor="gender1"
                      className="inline-block cursor-pointer bg-white border border-[#e0e0e0] py-2 px-4 rounded-md"
                    >
                      Erkek
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender2"
                      name="gender"
                      value="Kadın"
                      className="hidden"
                      onChange={handleGenderChange}
                    />
                    <label
                      htmlFor="gender2"
                      className="inline-block cursor-pointer bg-white border border-[#e0e0e0] py-2 px-4 rounded-md"
                    >
                      Kadın
                    </label>
                  </div>
                </div>
              </div>
              {isPregnantVisible && (
                <div className="w-full sm:w-1/2">
                  <h3 className="text-base font-medium text-[#07074D] mb-3">
                    Hamile misiniz?
                  </h3>
                  <div className="border rounded-md p-4 flex items-center justify-between">
                    <div>
                      <input
                        type="radio"
                        id="pregnantYes"
                        name="IsPregnant"
                        value="Evet"
                        className="hidden"
                      />
                      <label
                        htmlFor="pregnantYes"
                        className="inline-block cursor-pointer bg-white border border-[#e0e0e0] py-2 px-4 rounded-md"
                      >
                        Evet
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="pregnantNo"
                        name="IsPregnant"
                        value="Hayır"
                        className="hidden"
                      />
                      <label
                        htmlFor="pregnantNo"
                        className="inline-block cursor-pointer bg-white border border-[#e0e0e0] py-2 px-4 rounded-md"
                      >
                        Hayır
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="mb-5">
                <h3 className="block text-base font-medium text-[#07074D] mb-3 text-center">
                  Öğünler
                </h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <label
                      htmlFor="meals"
                      className="block text-base font-medium text-[#07074D] mb-3"
                    >
                      Öğünler
                    </label>
                    <Select
                      id="meals"
                      name="meals"
                      className="w-full md:w-48"
                      options={optionMeals}
                      isMulti
                      value={selectOptionMeals}
                      onChange={(selectedOptions) => {
                        setSelectOptionMeals(selectedOptions);
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="nutrition"
                      className="block text-base font-medium text-[#07074D] mb-3"
                    >
                      Sevmediğiniz Besinler
                    </label>
                    <Select
                      id="nutrition"
                      name="nutrition"
                      className="w-full md:w-48"
                      isMulti
                      options={optionNutrition}
                      value={selectOptionNutrition}
                      onChange={(selectedOptions) => {
                        setSelectOptionNutrition(selectedOptions);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="mb-5 w-full max-w-md">
                <div className="flex flex-col gap-4 w-full">
                  <label
                    htmlFor="meals"
                    className="block text-base font-medium text-[#07074D] mb-3 text-center"
                  >
                    Rahatsızlıklar
                  </label>
                  <div className="w-full">
                    <Select
                      id="diseases"
                      name="diseases"
                      className="w-full"
                      options={optionDiseases}
                      isMulti
                      value={selectOptionDiseases}
                      onChange={(selectedOptions) => {
                        setSelectOptionDiseases(selectedOptions);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
               Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
