Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  get 'inputs', to: 'home#inputs'
  get 'table', to: 'home#table'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
