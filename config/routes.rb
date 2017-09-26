Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  get 'inputs', to: 'home#inputs'
  get 'menus', to: 'home#menus'
  get 'messages', to: 'home#messages'
  get 'comments', to: 'home#comments'
  resources :messages
  mount ActionCable.server => '/cable' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
