// Card data interface
export interface CardData {
  title: string,
  body: string
}

// Shelters interface
export interface Shelter {
  title: string,
  body: string,
  services: {
    [serviceName: string]: boolean;
  },
  
}
