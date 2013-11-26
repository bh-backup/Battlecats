from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

class CatProfile(models.Model):
    name = models.CharField(max_length=100)
    attack_die = models.IntegerField()
    defense_die = models.IntegerField()
    cat_type = models.CharField(max_length=100, null=True)
    user = models.ForeignKey(User, related_name='cats')

    def __unicode__(self):
        return "%s {%d} {%d} {%s}" % (self.name, self.attack_die, self.defense_die, self.cat_type)

