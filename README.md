# SeaSaw-Project

## Açıklama

Bu proje, sol ve sağ taraflara ağırlık ekleyip çıkararak tahterevallinin dengesini sağlayan bir simülasyondur. Ağırlıklar görsel olarak gösterilir, toplam kg miktarı ekranda görünür, dengede olduğunda mesaj çıkar.

## Özellikler

- Sol ve sağ taraflara ağırlık ekleme/çıkarma
- Ağırlıkların düşme animasyonuyla görsel gösterimi
- Her tarafın toplam kg miktarını gösterme ve denge mesajı
- Dengesizken salınım efekti
- Gökyüzü/yer arka planı ve destek direkleri
- Sıfırlama butonu
- Basit ve duyarlı tasarım
- Ağırlıkları ve görselliği sade tuttum: her ekleme 1 kg olarak kabul edildi, böylece kullanıcının beklediği davranış öngörülebilir oldu.
- Dönüş hesabında gerçek fizik yerine basit bir model kullandım: fark (sağ - sol) * 5 derece gibi bir çarpanla açı hesaplanıyor — bu hem anlaşılır hem de görsel olarak anlamlı sonuç veriyor.
- Tasarım: arka plan, destek direkleri ve gösterge ile hem görsel hem işlevsel bir düzen korudum; HTML id'leri sabit bırakarak kodu daha kolay test edilebilir tuttum.
- Sadece başlangıç iskeleti ve ilk sürüm: HTML, temel CSS mantığı AI yardımıyla oluşturuldu.
