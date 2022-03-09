from admin_tools.dashboard import modules, Dashboard


class CustomIndexDashboard(Dashboard):
    """
    Custom index dashboard for config.x
    """
    columns = 3

    def init_with_context(self, context):
        self.children.append(modules.ModelList(
            title='Продукты и Услуги',
            models=('main.models.products.ProductCategories', 'main.models.products.Products',
                    'main.models.pages.ProductPages', 'main.models.products.Services',
                    'main.models.pages.ServicePages', 'main.models.pages.Pages', 'main.models.products.ProductFile',)
        ))
        self.children.append(modules.ModelList(
            title='Карьера',
            models=('main.models.career.Vacancy', 'main.models.career.Resume')
        ))
        self.children.append(modules.ModelList(
            title='Наполнение',
            models=('main.models.contacts.Contacts', 'main.models.menu.MenuItems', 'main.models.news.News',
                    'main.models.partners.PartnersTypes', 'main.models.partners.Partners',
                    'main.models.achievements.Achievements', 'main.models.feedback.Feedback')
        ))
