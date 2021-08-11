const redir = new Map([
  ["/2074" , "https://balloon.tel/"],
  ["/2064" , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/2063" , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/1050" , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/lrun-0/"],
  ["/1044" , "https://15jamrecipe.jimdofree.com/mixjuice/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84/"],
  ["/971"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8/"],
  ["/970"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8/"],
  ["/969"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8/"],
  ["/965"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%8B%E3%81%91%E7%AE%97%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC/"],
  ["/964"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E7%AE%B1%E5%85%A5%E3%82%8A%E5%A8%98/"],
  ["/963"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E7%AE%B1%E5%85%A5%E3%82%8A%E5%A8%98/"],
  ["/961"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%8A%E7%B5%B5%E3%81%8B%E3%81%8D%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF/"],
  ["/948"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-status/"],
  ["/942"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/shooting/"],
  ["/905"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/a-z-%E7%B4%A0%E6%97%A9%E3%81%8F%E3%82%BF%E3%82%A4%E3%83%97/"],
  ["/891"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E5%A4%89%E6%9B%B4/"],
  ["/890"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/864"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97-2/"],
  ["/863"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2-2/"],
  ["/855"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/854"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/853"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E5%A4%89%E6%9B%B4/"],
  ["/853"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E5%A4%89%E6%9B%B4/"],
  ["/852"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E5%A4%89%E6%9B%B4/"],
  ["/851"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E5%A4%89%E6%9B%B4/"],
  ["/845"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-16-10%E9%80%B2%E6%95%B0/"],
  ["/843"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/calc/"],
  ["/842"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/calc/"],
  ["/841"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2-2/"],
  ["/839"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%A4%E3%83%81%E3%82%B4%E3%82%B8%E3%83%A3%E3%83%A0-%E3%83%AA%E3%82%BA%E3%83%A0/"],
  ["/838"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/1-%E5%88%86%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-%E9%A2%A8%E8%88%B9/"],
  ["/837"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/give-up-2/"],
  ["/832"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%BF%B7%E8%B7%AF/"],
  ["/831"  , "https://15jamrecipe.jimdofree.com/ichigolatte/ruby-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-16-%E9%80%B2%E6%95%B0/"],
  ["/830"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-16-%E9%80%B2%E6%95%B0/"],
  ["/828"  , "https://15jamrecipe.jimdofree.com/ichigolatte/ruby-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-10-%E9%80%B2%E6%95%B0/"],
  ["/827"  , "https://15jamrecipe.jimdofree.com/ichigolatte/ruby-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7/"],
  ["/826"  , "https://15jamrecipe.jimdofree.com/ichigolatte/ruby-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/825"  , "https://15jamrecipe.jimdofree.com/ichigolatte/forth-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/824"  , "https://15jamrecipe.jimdofree.com/ichigolatte/ruby-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/821"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/new-%E8%BF%B7%E8%B7%AF-2/"],
  ["/820"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%83%8C%E6%99%AF%E8%89%B2-%E7%94%BB%E5%83%8F%E8%A1%A8%E7%A4%BA/"],
  ["/819"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A5/"],
  ["/818"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88%E8%A1%A8%E7%A4%BA/"],
  ["/817"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/816"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/new-%E8%BF%B7%E8%B7%AF-2/"],
  ["/798"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/796"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/795"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/794"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-to-cake-eeprom/"],
  ["/793"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/792"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/791"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/790"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/789"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E4%BB%A4%E5%92%8C/"],
  ["/788"  , "https://15jamrecipe.jimdofree.com/pancake/%E4%BD%BF%E3%81%84%E6%96%B9/"],
  ["/786"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-10-%E9%80%B2%E6%95%B0/"],
  ["/780"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E4%BB%A4%E5%92%8C/"],
  ["/770"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%95%E3%83%AF%E3%83%95%E3%83%AF"],
  ["/728"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/685"  , "https://15jamrecipe.jimdofree.com/mixjuice/%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E5%85%AC%E9%96%8B/#php"],
  ["/664"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB/"],
  ["/652"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-16-10%E9%80%B2%E6%95%B0/"],
  ["/651"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7-16-10%E9%80%B2%E6%95%B0/"],
  ["/649"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E3%81%86%E3%81%94%E3%81%8B%E3%81%99/"],
  ["/648"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E4%B8%80%E8%A6%A7-%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC/"],
  ["/646"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/645"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/634"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E3%81%AE%E3%81%86%E3%81%9F/"],
  ["/633"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/"],
  ["/632"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/"],
  ["/631"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A5/"],
  ["/630"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%90%BD%E3%81%A1%E3%82%8B/"],
  ["/629"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ls/"],
  ["/628"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/files/"],
  ["/627"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ls/"],
  ["/626"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E4%B8%80%E8%A6%A7-%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC/"],
  ["/625"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E4%B8%80%E8%A6%A7-%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC/"],
  ["/624"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%9D%E3%83%B3%E9%A2%A8/"],
  ["/623"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/1%E5%88%86%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-%E9%A2%A8%E8%88%B9/"],
  ["/622"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/give-up/"],
  ["/621"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/620"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E5%87%BA%E5%8A%9B/"],
  ["/619"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%8A%B1%E7%81%AB/"],
  ["/618"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A5/"],
  ["/617"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%89%B2%E4%B8%80%E8%A6%A7/"],
  ["/616"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%89%B2%E4%B8%80%E8%A6%A7/"],
  ["/615"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88%E8%A1%A8%E7%A4%BA/"],
  ["/614"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%83%8C%E6%99%AF%E8%89%B2-%E7%94%BB%E5%83%8F%E8%A1%A8%E7%A4%BA/"],
  ["/613"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/612"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/611"  , "https://15jamrecipe.jimdofree.com/pancake/basic-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/pancake-ichigojam-%E7%94%BB%E9%9D%A2%E5%88%87%E6%9B%BF/"],
  ["/609"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E3%81%86%E3%81%94%E3%81%8B%E3%81%99/"],
  ["/608"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/new-%E8%BF%B7%E8%B7%AF/"],
  ["/607"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/pk/"],
  ["/606"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/new-%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/"],
  ["/605"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/604"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-7-%E5%91%A8%E5%B9%B4/"],
  ["/603"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%B9%E3%82%AD%E3%83%BC/"],
  ["/602"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF/"],
  ["/601"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9-version-2/"],
  ["/600"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9-version-2/"],
  ["/599"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/598"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/597"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97/"],
  ["/596"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E6%8B%A1%E5%A4%A7%E8%A1%A8%E7%A4%BA/"],
  ["/595"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%8A%B1%E7%81%AB/"],
  ["/594"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/593"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/592"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A1%94/"],
  ["/591"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%90%E3%83%AB%E3%83%BC%E3%83%B3%E3%83%88%E3%83%AA%E3%83%83%E3%83%97/"],
  ["/590"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%90%E3%83%8A%E3%83%BC-%E9%9B%BB%E5%85%89%E6%8E%B2%E7%A4%BA%E6%9D%BF/"],
  ["/589"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%90%E3%83%8A%E3%83%BC-%E9%9B%BB%E5%85%89%E6%8E%B2%E7%A4%BA%E6%9D%BF/"],
  ["/588"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/15%E3%83%91%E3%82%BA%E3%83%AB/"],
  ["/587"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%BC%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E7%B7%B4%E7%BF%92/"],
  ["/586"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E5%8F%8D%E5%B0%84%E7%A5%9E%E7%B5%8C%E3%83%86%E3%82%B9%E3%83%88/"],
  ["/585"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E5%B4%A9%E3%81%97-%E6%94%B9%E8%89%AF%E7%89%88/"],
  ["/584"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A5/"],
  ["/583"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/3%E5%88%86%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC-%E9%9B%BB%E5%8D%93%E6%96%87%E5%AD%97%E9%A2%A8%E7%89%88/"],
  ["/582"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%BF%B7%E8%B7%AF/"],
  ["/581"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/3%E5%88%86%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/"],
  ["/580"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/ichigojam-%E3%83%AD%E3%82%B4/"],
  ["/579"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%81%86%E3%81%88-%E3%81%97%E3%81%9F/"],
  ["/578"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/give-up/"],
  ["/577"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E8%90%BD%E3%81%A1%E3%82%8B/"],
  ["/576"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%9D%E3%83%B3%E9%A2%A8/"],
  ["/575"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/574"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/573"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/572"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/l-%E3%83%81%E3%82%AB/"],
  ["/571"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/l-%E3%83%81%E3%82%AB/"],
  ["/570"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7/"],
  ["/569"  , "https://15jamrecipe.jimdofree.com/basic/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7/"],
  ["/558"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7/"],
  ["/556"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E9%A2%A8%E8%88%B9/"],
  ["/555"  , "https://15jamrecipe.jimdofree.com/ichigolatte/js-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/553"  , "https://15jamrecipe.jimdofree.com/ichigonquest/%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%AE%E3%81%8D%E3%82%8D%E3%81%8F/%E8%90%BD%E3%81%A1%E3%82%8B/"],
  ["/552"  , "https://15jamrecipe.jimdofree.com/ichigonquest/%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%AE%E3%81%8D%E3%82%8D%E3%81%8F/%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%94%BB%E9%9D%A2/"],
  ["/551"  , "https://15jamrecipe.jimdofree.com/ichigonquest/%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%AE%E3%81%8D%E3%82%8D%E3%81%8F/%E9%A2%A8%E8%88%B9/"],
  ["/550"  , "https://15jamrecipe.jimdofree.com/ichigonquest/%E3%81%BC%E3%81%86%E3%81%91%E3%82%93%E3%81%97%E3%82%87%E3%81%AE%E3%81%8D%E3%82%8D%E3%81%8F/l-%E3%83%81%E3%82%AB/"],
  ["/0"    , "http://kidspod.club/profile/default.html?id=6"],
  ["/"     , "https://github.com/fu-sen/k.bal.gdn" ]
])

async function handleRequest(request) {
  const location = redir.get(new URL(request.url).pathname)
  if (location) {
    return Response.redirect(location, 301)
  }
  return new Response("Not Found", {
    headers: { "content-type": "text/plain" },
    status: 404
  })
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
