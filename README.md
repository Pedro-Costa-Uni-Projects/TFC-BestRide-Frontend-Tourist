# Projeto Best Ride

#### Alterações do ultimo commit:

> Para Iniciar a app turista, execute os seguinte comandos:

```
    cd BestRide

```

---

```
    ionic serve turista_app

```

---

#### Tecnologias Usadas:

1. Ionic
2. Angular
3. Python
4. Django
5. MYSQL
6. TypeScript
7. AWS

---

## Para Executar em emulador Android:

> ionic build --prod && npx cap copy && npx cap sync android && npx cap open android

#### Bibliotecas Implementadas a instalar:

```
> npm install @ionic-native/geolocation
> npm install @ionic-native/native-geocoder
> npm i @ionic-native/core
> npm install --save @ionic-native/core@latest
> npm install @ionic/storage-angular
> npm i cordova plugin add cordova-plugin-stripe
> npm install @ionic-native/stripe
> npm install leaflet --save
> npm install leaflet-ant-path --save
```

---

# Se houver Algum erro no codigo do Image Picker no Android Studio executar:

npm install jetifier
npx jetify
npx cap sync android

## Nota :

> Para Iniciar o login do Facebook ou da Google, e
> aconselhavel emular o proprio usando o android studio (Android) ou o Xcode (IOS) ja que o browser nao consegue implementar as bibliotecas necessarias.

> Ajuste no menu que aparecia no login, agora só aparece depois do login

---

## TODO :

> ver Scrum

<br>
<br>
<br>

# Servidor Django REST API

## Passos:

1. Instalar o Python e definir como variavel do Sistema
2. Instalar o pip

- pip install django
- pip install djangorestframework

3. django-admin startproject BestRideApi
4. cd BestRideApi
5. python manage.py startapp best_ride

## Para a Base de dados:

- Iniciar o Wamp
- correr o Script no phpMyAdmin para aceder a BD BestRide

## Para Iniciar:

> python manage.py runserver 0.0.0.0:8080

> URLS:

- https://127.0.0.1:8000

## Instalações:

# AWS

> pip install boto3

# Social Login

> <preference name="OverrideUserAgent" value="Mozilla/5.0 Google" /> 
> > Inserir no config.xml
