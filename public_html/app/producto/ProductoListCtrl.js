/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (){
    angular.module("productManagment")
            .controller("ProductoListCtrl", ProductoListCtrl);
    
    function ProductoListCtrl(){
        var me = this;
        me.productos = [
            {
                "productoId": 1,
                "productoName": "Silla",
                "productoCode": "ACC-781",
                "purchaseDate": "Marzo 19,2015",
                "descripcion": "Silla ergonomica reclinable color negro",
                "costo": 9.00,
                "precio": 19.95,
                "categoria": "accesorios",
                "imagenUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUSEhAVFRQQEBUQFRAPEA8QFQ8UFBQWFhQUFBUYHCggGBolHBQUITEhJSkrLi4uFx8zODMsNygtLysBCgoKDg0OFBAQFywcFxwrLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLDcsLCw3LDcsLCwsLP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABEEAACAQICBwUEBgcGBwAAAAAAAQIDEQQhBQYSMUFRcRMiYYGRBzKhsSNCUnLB0RQzU2KCk8IVQ5Ky8PEkVGRzotLh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAdEQEBAAIDAQEBAAAAAAAAAAAAAQIREiExE0ED/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt160YRc5yUYxV3KTSSXNs1HSevtKM9mhDtVbOo3KEU+SVrvrkS2RZNtyBz3Ea3YuXuuEPuQu/WVyNraTxM/er1H4Kcor0VkY+kXhXU5SSzbt4vIxaulMPH3q9NeDqQX4nLZU7u7z8XmVKkifReDo09Y8Gv7+L+6pS+SLa1pwf7V/yq3/AKnP1BFWyifSrwjpOB0xh6z2adRN79lqUW+iaVzOOVU24tSi2nF3TWTTXE6JoLSXb0VJ+9HuzS+0uPR7zeOe2bNJEAG2QAAAAAAAAAAAAAAAAAAAAAAAGre0mlN4BuLyhVhOaX1o3tb/ABSi/I5VhZ5nddJ4NVqNSlLdVpyhfltK1/I4M4ShOUJK0oScZLlKLs16o5ZxvFP4eV0X4kfgKnAz0zm2uI9uW0z3aAuXFy3tnnaAXbk5qjjNjEbLeVVbP8Szi/mvM13tC9hcRsVIS+xOMvRplnVSurgA9DkAAAAAAAAAAAAAAAAAAAAAAAAHFtesH2WkKuWVRqsvHbV3/wCSmdpOe+1jR+VHEJbm6Mn170PlP1M5zpcfWmYGe4lNogcJMkp4mKWbSfJvN+RxdGU6hRKsYMq7e6Lfk18ynYqv6vqwMx4goeIMdYOq/rJdFcuQ0a+Mn8gLixBeoVdpqPGTUV4tuyKIaOjxV+rbMilgoJpqKTTumkrprc0wOxA1jVnWBzao1n3vqVHlt/uy8fHj137Od5dudmgAFQAAAAAAAAAAAAAAAAAAAAACH1u0f2+CrU0ry2NuHPbh3opdbW8yYAHz9SkvUk9H0oLcld73bN+Zb1mwH6PjKtK3dVRyj9yfeivJO3kWsHWs0eeusTCplSgVQKrkaeKBUoi55cIqselG0NoC5GVmmsmndNb01uZ0nROM7ajCpxkrPwkspfFHMdo3LUXEXp1IfZmprpJW/p+Jv+d7ZynTaAAdnMAAAAAAAAAAAAAAAAAAAAAAABzr2r6O/VYhLnQm/WVP+v4GhUJnbtZ9G/pGEq0ku9KF4ffj3ofFJeZwym8zlnO28Wx4OpeKMi5G6OrKzL1TFrhn0zObbM2ih1EYLqVHuj/idvkFhqj3zt91fmBmSroszxsVxXqUrR64tvq38i/TwkI7or0KLKxd9yb6Jmx6m6Up0qs3VbgpwSTabV78bbiIUFyPbCXXaWOs05qSTTTTV007prmmVHMcPrVWwdGezBVIrvKE5OOxn3mmk8uNv9PCr+0DHTzjKEFyhTT+MrnXnGOLrYOLz1oxsnd4mp/DLZ+EbFtadxX/ADNX+dV/MfSHF2wHGqWn8Ut2Jq/zZv5sz8NrTjI7sQ34TjTl81cfSHF1YGi4HXWsv1tOM1zheD/FP4G0aL03Qr5QlaX7Ofdl6cfIsylSypIHjPTSAAAAAAAAAAAAAAcV110d+j46pFK0aj7aH3Z5v0ltLyOt6W0xQw0dqtUUb7o75T+7FZs5jrvp2jjZU3Tpzi6W0tueynOMrZbKvxV9/FmM9aaxa3TqImcJJNENCgv9NmVSdt115nFtMIqRHQrS5/IvwqviFZh6Y6qjtgbX7lEpmPKuYtfFpcRpNqdJV8mjXsFUycfsu3lvXwMrG4tcyJo112js+Cv8TUibS6mXFMxIzLkZDQyozL1OsYcZFxMipnCYgkqb3NOzWaayafU1qlUsydwFa66kVv2rennUtSqvv/Vn9u3B+PzNiOYUm4tSTs0001wa3M6HonGdtRjPi1aS5SWTO2GW3PKMwAG2QAAAAAAAA8k7K/I9KKvuvo/kBwrSOkJ4irKtN3lN3+7H6sV4JGMWoPJdC4med1e3K1MpAGRCqZtCoRRfoVbMKmlTuY2Nws9lums1ns8+niZOFqXRk2INKniq0t0X5rZ+ZZlhKsvenbpdmzaZwiX0iW/KXXgyMSLtnSK/sqPFt9X+CPP7Oit0UumRMpFXYja6QXYzW5+oVVrevTMm5YUtywZdmkfTrJ7mX4yK56NT4eaKP0GpH3Xfwl+YRdiyR0XVs7cyJUmnaSafjufRmXhJ2kn4kVtcZ5G2ak4i8akL+7JTX8Ss/wDKvU0qnPI2XUaf081zpX9JL8y4epl43YAHdzAAAAAAAACmayfQqAHzzBZW5HpcxUNmpOP2ako+kmik87qKRWi1Y9TAuHqPEz0oktG1eBNQzNZwlS0kbHh55GVV4ikpQcXxVuhrDp2duWRtLkQ2KpfSPxz9d/xKjEp0zIhTL8KRWqYVZVI97EyoxPJ1YLewLCoFyFAsz0hHdFNvwVyjta0tyUV47wjIxGEhKLUkrM1qNXYnKDecJWvzW9P0aNgjhJP3pN/AyKOBgnfYV3xsrvzAowtZOJtGoj/4iX/Zl/ngQbpJq1v/AITWoUGsTNPhRfn34Fx9iXxvoAO7mAAAAAAAAAADhes1HYxuIj/1E35Sk5L4Mjos2X2jYXs9ITlwrQhUXpsP4w+JrNjhfXSK7nhSmVEV6mVplB6gLkXmT+EqXS6GvomcDLuoEZ20YWL95Pw+X+5ktkNp7F7GxZ8X8gVJ9tFLNmPLHp5RTk/BXIzRiVV3m78o3y8ydp0klkkvBIDD2a0uOyvVlVPR8frXl95/gZ0YlzYIulinh0ty9C9Cmi5FFaiBSonqRWkGB5YkNCY/sKqm1dNbMuey2ndeORgXLNTFQjvkkWdI6pCaaTTumrprinuZUa/qVWnPDttPY232bkrbUeLX7t7/ABNgO8u45UABQAAAAAAABqPtA1bliqcatLOrRT7n7WDzcV+8rZdWcmTPoc0LXzU/b2sTh49/3qlKK/Wc5wX2ua49d+Msf1qVzdoJnkWDk2qPUUoqAqRKaPl3fMikSGBeXmBn1Khq2sVW8o+ZP4ioarpqvFTW1JJZ+80ixKowWP7Odm8n8HzN1wNfaRzitCM/dxFKOe9zTduVjZdXMQoKMO1jUaVnKLTyvlkn0RbCVuCRWkU0syuU4xzbMNKoo92jFpYidWWxQpyqS5Qi2l1e5eZCax47E4ap2dWjOnJq62rbMlzjJXUvJl1U2nquKjHeyPraYV9mObNOq42rPfJ9FkSWiqVs+ZdJtMSqVJ75PPhE6ponVnC0Yx+hjKaSvUqLbk5Wzact2fI0bUvR3b4qLa7lG1WXVPuLzefSLOpm8IzlQAHRkAAAAAAAAAAAAAc9181OvtYrDRz96rRive51ILnzXHfv387iz6GOc6+an22sVho5Zyq0Yr1qQXzXnzOeWP7GpWgHqZSmVHNtUjOwe5mDEzcN7vmB7XZEVcLGc+9FS4JOKln4ImJxOhezbAQjh51XCO3OtJKdltbKjFWT5X2jWM3Wa0TRHs4qYizlhqdKD+vWpqLfSFtp+dl4m3YP2UYCnFtX7bZajVj3FFtZPYW9X4Ns34HXiztzTR2rOkJdxwjTUW4urUkmnbjBLN/A2LR+pGHjaVaUq8uUu5DygvxbNpBJhIbq3QoQhFRhCMYrdGEVFLokWdJaOo4im6VanGpB/Vmr2fBp70/FZmUDSOT6wezCrCW3g5dpBv8AU1JRjUh92TspLrZ9TzQ2omMnbbiqMeLm4ylbwjF5+bR1kGeMXaP0JoilhaSp0+spv3py5v8AIkADSAAAAAAAAAAAAAAAAAAA53rxqZ72JwsecqlGK9Z0184+hz1M+hjn+u+pe05YjCx7z71ShFe9znTXPnHjwz388sf2NSueIzsO8kYETOpPI5trzZ1nVLDdngqK5w7T+Y3P+o5ZorCOvXp0Y/3kkm1wjvk/JJs7RCKSSSskrJcktx0wjGSoAHRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp+tmpUcQ3WobMKzd5J3UKvi7LKXjx48yDwHs/wATJ/S1IU484t1JPoskvXyOmAzxi7qH0Dq3h8Jd005Tas6tR3k1yVskui5XuTABpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="                
            },
            {
                "productoId": 2,
                "productoName": "Martillo",
                "productoCode": "MAR-147",
                "purchaseDate": "Abril 25,2016",
                "descripcion": "Silla ergonomica reclinable color negro",
                "costo": 9.00,
                "precio": 45.20,
                "categoria": "accesorios",
                "imagenUrl": "http://4.bp.blogspot.com/-2Tuwz9-IwqE/T47mWV62iJI/AAAAAAAAAAM/qTSUaWr815g/s1600/martillo.jpg"                
            },
            {
                "productoId": 3,
                "productoName": "Alicate",
                "productoCode": "ALL-471",
                "purchaseDate": "Febreri 05,2015",
                "descripcion": "Silla ergonomica reclinable color negro",
                "costo": 9.00,
                "precio": 50.50,
                "categoria": "accesorios",
                "imagenUrl": "http://www.maletaprofesional.com/image/cache/data/ref.4496-900x600.jpg"                
            }
        ];
        
        me.showImage = false;
        
        me.toggleImage = function (){
            me.showImage = !me.showImage;            
        };
        
    }
}());

