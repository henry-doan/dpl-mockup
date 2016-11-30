Rails.application.routes.draw do
  root 'home#index'

  # KEEP THIS AT BOTTOM
  get '*unmatched_route', to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
