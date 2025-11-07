Feature: Vardiya Listesi

  Scenario: Kullanıcı vardiyaları görür
    Given kullanıcı ana sayfadadır
    When sayfa yüklendiğinde
    Then "Vardiya Sistemi" başlığını görmeliyim
    And vardiya listesini görmeliyim
