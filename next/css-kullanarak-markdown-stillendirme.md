---
title: "next-ile-markdown-kullanma-rehberi"
subtitle: "Next.js projemde Markdown kullanma kararı aldıktantan sonra, markdown nasıl kullandığımı anlatan bir blog, bu blog yazısında markdown kullanımını ve faydalarını göreceğiz,markdown için custom css nasıl yazabilirizbunu anlayacağız"
date: "2024-03-07"
---

# Markdown Nasıl kullanırız?

Markdown da #(diyez) işareti HTML de "h" etiketine karşılık gelir # işareti konulduktan sonra yazılan ifade boşluk olmalı ve yeni satırda başlmalıdır.Heading("h") etkitenin#h1,##h2,###h3,####h4,#####h5,######h6 şeklinde örnek gösterimi aşağıda mevcuttur.
Örnek gösterim;

# Örnek h1 başlığı

## Örnek h2 başlığı

### Örnek h3 başlığı

#### Örnek h4 başlığı

##### Örnek h5 başlığı

###### Örnek h6 başlığı

-Burada fark etmenizi istediğim nokta "h1" etiketinin boyutu, genelde yaklaşık 32px(2rem) dir.Tarayıcılar arasında bu boyut farklılık gösterebilir.Bizim oluşturduğumuz "h1" etiketinin boyutu çok daha küçük çünkü markdown yazımızdaki "h1" etiketimize CSS ile ulaşarak fontunu istediğimiz değere çevirdik.Peki bunu nasıl yaptık?

Projem framwork olarak [next](https://www.npmjs.com/package/next) kullanıyorum markdown yazılarımı stillendirmek ve render etmek içinde [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) paketini kullanıyorum.

<Code language="javascript">
"use client";
    import React from "react";

    const DenemeComp = () => {
    return <div>Ben clienttan geliyorum</div>;
    };

export default DenemeComp;

</Code>
