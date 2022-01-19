from admin_tools.dashboard import modules, Dashboard, AppIndexDashboard


class CustomIndexDashboard(Dashboard):
    """
    Custom index dashboard for config.x
    """
    def init_with_context(self, context):
        self.children.append(modules.Group(
            title=u"Управление сайтом",
            display="tabs",
            children=[
                modules.AppList(
                    'Пользователи',
                    models=('main.models.users.*', 'main.models.messages.*')
                ),
                modules.LinkList('Услуги',
                                 children=[
                                     ['Услуги',
                                      '/admin/main/Services/'],
                                     ['Продукты',
                                      '/admin/main/Products/'],
                                     ['Категории продуктов',
                                      '/admin/main/ProductCategories/'],
                                 ]),
                modules.LinkList('Вакансии',
                                 children=[
                                     ['Вакансии',
                                      '/admin/main/Vacancy/'],
                                     ['Резюме',
                                      '/admin/main/Resume/'],
                                 ]),
                modules.LinkList('Организации',
                                 children=[
                                     ['Контакты',
                                      '/admin/main/Contacts/'],
                                     ['Партнёры',
                                      '/admin/main/Partners/'],
                                 ]),

            ],
        ))

