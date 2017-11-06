Rails.application.routes.draw do
  get '/' => 'portfolios#index'
  get '/about' =>'portfolios#about'

  get '/contact', to: 'messages#new', as: 'contact'
  post '/contact', to: 'messages#create'

end
