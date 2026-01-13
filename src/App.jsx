import React from "react";
import NewItem from "./components/NewItem";

// function App() {
//   return (
//     <>
//       <div className="container">
//         <h1 className="bigTitle">ព័ត៌មានថ្មីៗ</h1>
//         <NewItem
//           image="https://cdn.sabay.com/cdn/media.sabay.com/media/Bun.Sophearum/TechPhoto/TechPhoto02/68a7d6b05104a_1755829920_medium.jpg"
//           title="Pixel 10 មានលក្ខណៈពិសេសអ្វីខ្លះធៀបនឹង Pixel 9?"
//           date="២៧ មិថុនា ២០២៤"
//           desc="Google បានប្រកាសផ្លូវការអំពីទូរស័ព្ទ Pixel 10 និង Pixel 10 Pro ថ្មីរបស់ខ្លួន ដែលនឹងចេញផ្សាយនៅថ្ងៃទី ៤ តុលា ឆ្នាំ ២០២៤។"
//         />
//       </div>
//     </>
//   );
// }

const newsData = [
  {
    id: 1,
    title: "Pixel 10 មានលក្ខណៈពិសេសអ្វីខ្លះធៀបនឹង Pixel 9?",
    date: "សៅរ៍, 5 វិច្ឆិកា 2022",
    desc: "សរុបលេងៗ ៦បទ ស្នាដៃកូនខ្មែរពិតៗ",
    image: "https://cdn.sabay.com/cdn/media.sabay.com/media/Bun.Sophearum/TechPhoto/TechPhoto02/68a7d6b05104a_1755829920_medium.jpg"
  },
  {
    id: 2,
    title: "MediaTek ត្រៀមបញ្ចេញឈីបកំពូលថ្មី សម្រាប់ប្រជែងជាមួយ Snapdragon Elite 2",
    date: "សុក្រ, 4 វិច្ឆិកា 2022",
    desc: "ជំនួយការម្នាក់នោះនិយាយថា៖ «ពេលវេលា...»",
    image: "https://cdn.sabay.com/cdn/media.sabay.com/media/Bun.Sophearum/TechPhoto/TechPhoto1/68932e6442efc_1754476080_medium.jpg"
  },
  {
    id: 3,
    title: "Pixel 10 ចំនួន ៤ ម៉ូឌែល នឹងបង្ហាញខ្លួននៅថ្ងៃទី២០ ខែសីហា",
    date: "ព្រហស្បតិ៍, 3 វិច្ឆិកា 2022",
    desc: "ក្រុមហ៊ុនបច្ចេកវិទ្យាយក្សអាមេរិក Google ត្រៀមនឹងបង្ហាញផលិតផលទូរសព្ទកំពូលជំនាន់ថ្មីរបស់ខ្លួន នៅថ្ងៃទី២០ ខែសីហា ឆ្នាំ២០២៥ ដោយបានបញ្ចេញព័ត៌មានបែកធ្លាយ រូបភាព និងវីដេអូ Teaser ជាច្រើនជុំវិញត្រកូល Pixel 10 Series ដែលនឹង",
    image:"https://cdn.sabay.com/cdn/media.sabay.com/media/Bun.Sophearum/TechPhoto/TechPhoto1/6892e10344969_1754456280_medium.jpg"
  }
]

function App() {
  return (
    <div className="container">
      <h1 className="bigTitle">ព័ត៌មានថ្មីៗ</h1>
      
      {newsData.map((item) => (
        <NewItem 
          key={item.id} 
          image={item.image}
          title={item.title}
          date={item.date}
          desc={item.desc}
        />
      ))}
      
    </div>
  );
}

export default App;
