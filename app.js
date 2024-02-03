let cardsdetails = document.querySelector('.cardsdetails');
let detailsSections = document.querySelector('.details-sections');
let video = document.querySelector('.vid');




const myData = {
  myCards:[
    {title:"تحكم آمن",
    description:"نحن نسعى لتقديم تجربة فريدة للتحكم عن بُعد في بيتكم، لنمكّنكم من السيطرة على كل جهاز بكل سهولة وأمان من أي مكان في العالم."  ,
    imageUrl:"./imgs/details-3.JPEG"   
    },
    {title:"إدارة مركزية",
    description:"استمتع بالقدرة على التحكم في جميع أجهزتك من خلال تطبيق واحد سهل الاستخدام.",
    imageUrl:"./imgs/imagecard.JPEG" , 
    class:"second", 
    },
    {title:"تحكم متعدد",
    description:"تعرّف على تشكيلتنا الواسعة من الأجهزة التي تسهّل حياتكم اليومية، بدءًا من التحكم في الإضاءة والتدفئة إلى أجهزة الأمان والترفيه.",
    imageUrl:"./imgs/details2.JPEG"   
    },
  ],
  detailsSectionsArray:[
    {
      description:"  درجات الحرارة مش بتنزل والحر بقا لا يُحتمل، لكن فواتير الكهربا كمان لا تُحتمل ريموتيرا هتساعدك تتحكم في كل تكييفات البيت بسهولة ومن أي مكان، بموبيلك بس هتقدر تفتح وتقفل التكييف في أي أوضة، عشان تعييش إنتعاشة الصيف وانت مرتاح   مستني إيه ؟ ركب ريموتيرا واتحكم في فاتورة الكهربا وانت في مكانك.",
      imageUrl:"./imgs/details2.JPEG",
      className:"second",
    }, 
    {
     description:`
     مع التفكير في تحويل البيت ل smart home، بنفكر في الراحة والتوفير والأمان، بس بيقطع تفكيرك خوفك على تشطيب البيت وعلى الحيطان اللي بنخاف ندق فيها مسمار 
     بس احنا بنقولك كمل تفكير ومتشيلش هم
     جهاز Remoteera من مميزاته سهولة التركيب، مش بيحتاج تكسير ولا تغيير في البيت، والتركيب كمان بشكل مجاني.
     هنقدر نخلي بيتك smart home سواء قبل التشطيب أو بعد.
     يلا اطلب جهازك وسيب التركيب علينا .
     `,
      imageUrl:"./imgs/details-3.JPEG",
      className:"there",
    },
    {
      description:`
      بعد أسبوع ملئ بالضغوط مفيش أحلى من weekend مع العيلة وشوية فشار وهلا بال movie night 
      وعشان السهرة تكون أحلى remoteera بتقدملك نظام متكامل لل sound system تقدر تتحكم فيه في اي وقت ومن أي مكان عشان القعدة تحلو وتدخل في موود الفيلم وتستمتع بجودة صوت واضح ونقي. 
      `,
       imageUrl:"./imgs/details4.JPEG",
       className:"four",
     },
  
     {
      description:`
      معظم التكنولوجيا اللي حوالينا دلوقت هدفها بيتمحور حوالين راحتك، وإنها تقدملك اللي محتاجه بأسرع وأكفأ طريقة
      وأهم حاجة كلنا محتاجينها دلوقت هي الأمان، وإنك على الأقل تبقى قاعد في بيتك متطمن، ولو خرجت برا تبقى متأكد أنه حاجتك في أمان، ومن هنا جت فكرة ال smart door lock. 
      وده عبارة عن كالون بيخليك تتحكم في فتح وقفل الباب من خلال باسورد أو بصمة إيدك بالإضافة للطريقة العادية وهي المفتاح، وكمان هيسجل مين دخل البيت وإمتى. 
      كل إللي عليك إنك تبعتلنا رسالة والباقي علينا .
      `,    
       imageUrl:"./imgs/details5.JPEG",
       className:"five",
     },
    
     {
      description:`
      سجفة تنور ..سجفة تطفي!! 
      إحنا إنهارده في Remoteera جايين نثير الجدل ونقولكم إن ال Smart Homes في صعيد مصر بقا خلاص واقع ملموس وإن فزاع مش أحسن مننا في حاجة 
      تقدر بحركة واحدة من تلفونك تتحكم في أي حاجة في بيتك، سواء كُنت موجود في البيت أو برا البيت، واللي بدوره هيوفرلك أمان أكتر ليك ولعيلتك. 
       `,    
       imageUrl:"./imgs/details6.JPEG" ,
       className:"six",
     },
     {
      description:`
      لضمان سلامتك وسلامة بيتك فأحنا بنوفرلك ضمان كامل للجهاز لمدة  ثلاثة أعوام شامل كافة أنواع الصيانة .
        `,    
       imageUrl:"./imgs/details3.JPEG" ,
       className:"seven",
     }
    ],
    videoArray :[
      {
        poster:"./imgs/details1.JPEG",
        src:"./Video/Facebook_2.mp4"
      },
      {
        poster:"./imgs/details2.JPEG",
        src:"./Video/Facebook_1.mp4",
        id:"special"
      },
      {
        poster:"./imgs/details-3.JPEG",
        src:"./Video/Facebook_4.mp4"
      },
    ]

};





function sectionCards() {
  //loop cards
    const newCards = myData.myCards.map((item)=>{
        return `
        <div class="card ${item.class}">
        <div class="row ">
          <div>
            <img src="${item.imageUrl}">
          </div>
          <div>
            <div class="card-body">
              <h5 class="card-title">
                ${item.title}
              </h5>
              <hr/>
              <p class="card-text">
              ${item.description}
                </p>
            </div>
          </div>
        </div>
      </div>
        `  
    }
    ) 
    cardsdetails.innerHTML =newCards
     // loop sections
     const newDetailsArray = myData.detailsSectionsArray.map((item)=>{
      return `
      <section class="details1 ${item.className}">
      <div class="container">
      <div class="parent">
        <div class="box one">
          <img src=${item.imageUrl} alt="details photo">
        </div>
        <div class="box">
          <h3> 
          ${item.description}
             </h3>
        </div>
      </div>
    </div>
    </section>
      `  
  }
  ) 
  detailsSections.innerHTML =newDetailsArray;
  // loop videos
  const newVideoArray = myData.videoArray.map((item)=>{
    return `
    <video controls id=${item.id} poster=${item.poster}>
    <source src=${item.src}>
  </video>
    `  
}
) 
video.innerHTML =newVideoArray;
}
sectionCards();
//end




window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      scrollToTopBtn.style.display = "block";
      } 
      else{
              scrollToTopBtn.style.display = "none";
          }
}
//end

var currentDate = new Date();
var year = currentDate.getFullYear();
var footer = document.getElementById('date');
footer.innerHTML = year;
//end

 





