export const PersianPublishedArticlesData = [
  {
    id: '1',
    language: 'fa',
    summary: 'در این پست وبلاگ با قدرت انتخابگرهای CSS و نحوه هدف قرار دادن عناصر خاص در صفحه وب خود آشنا شوید.',
    title: 'انتخابگرها (Selectors) در CSS یک بار برای همیشه !!',
    keywords: 'what is a css selector,what is css selector,css selector attribute,css selector cheat sheet,css selector text,xpath vs css selector,css selector first child,css selector multiple elements',
    readFrom: [
      {
        id: 11232,
        articleSource: "Virgool.io",
        articleLink: 'https://virgool.io/ACAPub/%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%DA%AF%D8%B1%D9%87%D8%A7-selectos-%D8%AF%D8%B1-css-%DB%8C%DA%A9-%D8%A8%D8%A7%D8%B1-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%87%D9%85%DB%8C%D8%B4%D9%87-jljatxe3o6rv'
      }
    ],
    markdown: `
                # انتخابگرها (Selectors) در CSS یک بار برای همیشه !!


                یک سوال/مشکلی که شاید برای خیلی ها در هنگام "یادگیری/انجام کار" پیش اومده باشه این است که در انتخاب Selector دچار شک/اشتباه میشوند و درون یک لوپ اذیت کننده گیر می‌کنند به دلیل ندانستن سلکتور مناسب پس بعد از مدت زمانی درگیری، تسلیم شده و بجای استفاده از سلکتور مناسب روی می‌آورند به DOM Manipulation با استفاده از جاوا اسکریپت یا از اون بدتر تغییر دادن DOM Structure !!‌ .

                سی اس اس سلکتورهای نسبتاً زیادی دارد اما واقعاً همه آن‌ها مکرر استفاده نمی‌شوند و تعدادی مورد استفاده‌های خاص دارند از این تعداد بعضی‌ها از روی اسم مشخص می‌شود که چه کاری انجام می‌دهند و تعدادی هم علامت سوال باقی می‌مانند لازم نیست به همه سلکتور ها مسلط باشید هدف این پست توضیح و تشریح کاربردی‌ترین و پراستفاده‌ترین سلکتورها به طور کامل و یک بار برای همیشه است.

                در پایین یک شِما کلی از سلکتورهای پرکاربرد و مهم آورده‌ام اما قبل از اینکه به سراغشون بریم لازم دونستم بگم اشاره‌ای به سلکتور کلاس و آیدی ( ' . ' , ' # ' ) نکردم چون فرض بر این است که اگر کسی از این دو مطلع نباشه بهتره بجای ادامه این مطلب، آموزش ابتدایی css رو شروع کنه.


                ![draw.io ساخته شده با ](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/cdt1lezpqulr.png)


                ۱ . سلکتور فرزندان: برای استفاده از این سلکتور نیازی به استفاده از کاراکتر خاصی نیست در واقع همان فاصله (space) بین المنت‌ها است و تمامی فرزندان المنت موردنظر رو انتخاب می‌کند .


                مثلا فرض کنید داریم :

                ![ساختار HTML مثال ](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/ukl4qjpqy3ly.jpeg)

                ![ساختار CSS مثال](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/3t1qhlxftbmo.png)


                *   سوال: استایل بر روی کدام پاراگراف ها اعمال میشود؟‌
                *   جواب: همه


                وقتی از سلکتور فرزندان استفاده می‌کنید تو در تویی المنت ها اهمیتی ندارد فقط کافیه فرزند Wrapper اصلی باشند.



                یعنی حتی در حالت زیر هم استایل‌ها بر روی پاراگراف اعمال خواهد شد تا زمانی که پاراگراف ها فرزند Post هستند.



                ![ساختار HTML با تو در تویی عمیق المنت ها](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/9alibwudsxy3.jpeg)


                ۲. سلکتور فرزند مستقیم : فرزند مستقیم المنت مورد نظر رو انتخاب می‌کند.



                یعنی در واقع المنت‌هایی که مستقیما فرزند المنت پدر ذکر شده هستند انتخاب می‌شوند نه المنت‌هایی که درون المنت دوم یا سومی قرار گرفته است .



                مثال قبل رو با سلکتور فرزند مستقیم بازنویسی می‌کنیم‌:


                ![ساختار HTML با تو در تویی فرزندان](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/xpqwtdolncar.png)


                ![ساختار CSS مثال](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/6q2jw5a6w6jj.png)


                *   سوال: استایل بر روی کدام پاراگراف‌ها اعمال می‌شود؟‌
                *   جواب: پاراگراف‌های خط ۲ و ۲۲ ( اولین پاراگراف بعد از تگ section و آخرین پاراگراف قبل از بسته شدن تگ section )


                ۳. سلکتورهای ( خویشاوند ) :‌



                ۳ ـ ۱ :‌ General Sibling Selector : (‌ ~ ) : با استفاده از این سلکتور تمامی المنت‌هایی که از جنس سمت راست "~" هستند و بعد از المنت از جنس سمت چپ "~" اومدن و به شرطی که پدر هردو المنت‌ها یکی باشد انتخاب می‌شوند. برای درک بهتر مثال زیر رو ببینید:



                ![ساختار HTML مثال ~](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/gr2dta7fmijw.png)


                ![ساختار CSS مثال ~](https://files.virgool.io/upload/users/6175/posts/jljatxe3o6rv/xvkkebsueql1.png)



                *   سوال: استایل بر روی کدام پاراگراف‌ها اعمال می‌شود؟‌
                *   جواب: پاراگراف‌های ۲۲ و ۲



                - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
                  resize in browser.
                - __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
                  i18n with plurals support and easy syntax.

                You will like those projects!

                ---

                ## h2 Heading
                ### h3 Heading
                #### h4 Heading
                ##### h5 Heading
                ###### h6 Heading


                ## Horizontal Rules

                ___

                ---

                ***
    `,
  },
  {
    id: '2',
    language: 'fa',
    summary: '',
    keywords: '',
    title: 'تفاوت ۲ پیش پردازشگر سی اس اس (PostCSS , SASS)',
    readFrom: [
      {
        id: 11221,
        articleSource: "Virgool.io",
        articleLink: 'https://virgool.io/@amirsinaa/postcss-vs-sass%D8%AA%D9%81%D8%A7%D9%88%D8%AA-%D8%AF%D9%88-%D9%BE%DB%8C%D8%B4-%D9%BE%D8%B1%D8%AF%D8%A7%D8%B2%D8%B4%DA%AF%D8%B1-css-cdupaac341h4'
      }
    ]
  }
]